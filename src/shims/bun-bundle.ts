/**
 * Polyfill for `bun:bundle` - Bun's compile-time feature flag system.
 *
 * In the original Bun build, `feature('FLAG')` is resolved at compile time
 * to a literal `true` or `false`, enabling dead code elimination.
 *
 * This shim provides a runtime alternative that reads feature flags from
 * environment variables: CLAUDE_CODE_<FLAG_NAME>=true to enable a feature.
 */

// Feature flags that are enabled by default for a functional local build.
// Adjust this map to toggle features on/off for development.
const DEFAULT_FLAGS: Record<string, boolean> = {
  // Core features - enabled
  DAEMON: false,
  BRIDGE_MODE: false,
  KAIROS: false,
  KAIROS_BRIEF: false,
  VOICE_MODE: false,
  BUDDY: false,
  COORDINATOR_MODE: false,
  PROACTIVE: false,
  HISTORY_SNIP: false,
  WORKFLOW_SCRIPTS: false,
  CCR_REMOTE_SETUP: false,
  EXPERIMENTAL_SKILL_SEARCH: false,
  KAIROS_GITHUB_WEBHOOKS: false,
  ULTRAPLAN: false,
  TORCH: false,
  UDS_INBOX: false,
  FORK_SUBAGENT: false,
  MCP_SKILLS: false,
  CONTEXT_COLLAPSE: false,
  CCR_MIRROR: false,
  CCR_AUTO_CONNECT: false,
  TEAMMEM: false,
  TRANSCRIPT_CLASSIFIER: false,
  DIRECT_CONNECT: false,
  SSH_REMOTE: false,
  LODESTONE: false,
  UPLOAD_USER_SETTINGS: false,
  CHICAGO_MCP: false,
  WEB_BROWSER_TOOL: false,
  BG_SESSIONS: false,
  KAIROS_CHANNELS: false,
  COMMIT_ATTRIBUTION: false,
  ABLATION_BASELINE: false,
  SKIP_DETECTION_WHEN_AUTOUPDATES_DISABLED: false,
  EXTRACT_MEMORIES: false,
  MEMORY_SHAPE_TELEMETRY: false,
  AGENT_TRIGGERS: false,
  DUMP_SYSTEM_PROMPT: false,
};

const CACHE: Record<string, boolean | undefined> = {};

export function feature(name: string): boolean {
  if (name in CACHE) {
    return CACHE[name] as boolean;
  }

  // 1. Check environment variable override
  const envKey = `CLAUDE_CODE_${name}`;
  const envVal = process.env[envKey];
  if (envVal !== undefined) {
    const result = envVal === 'true' || envVal === '1';
    CACHE[name] = result;
    return result;
  }

  // 2. Check default flags
  if (name in DEFAULT_FLAGS) {
    CACHE[name] = DEFAULT_FLAGS[name];
    return DEFAULT_FLAGS[name];
  }

  // 3. Default: feature disabled
  CACHE[name] = false;
  return false;
}
