// Stub: VerifyPlanExecutionTool (Anthropic internal tool)
export const VerifyPlanExecutionTool = {
  name: 'verify_plan_execution',
  description: 'Anthropic internal VerifyPlanExecution tool (stub)',
  inputSchema: { type: 'object', properties: {} },
  async call() { throw new Error('VerifyPlanExecutionTool is not available') },
  async isEnabled() { return false }
}
