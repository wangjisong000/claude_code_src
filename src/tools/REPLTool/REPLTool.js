// Stub: REPLTool (Anthropic internal tool)
export const REPLTool = {
  name: 'repl',
  description: 'Anthropic internal REPL tool (stub)',
  inputSchema: { type: 'object', properties: {} },
  async call() { throw new Error('REPLTool is not available') },
  async isEnabled() { return false }
}
