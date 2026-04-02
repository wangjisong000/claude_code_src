// Stub: TungstenTool (Anthropic internal tool)
export const TungstenTool = {
  name: 'tungsten',
  description: 'Anthropic internal Tungsten tool (stub)',
  inputSchema: { type: 'object', properties: {} },
  async call() { throw new Error('TungstenTool is not available') },
  async isEnabled() { return false }
}
