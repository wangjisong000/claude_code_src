// Stub: Connector text block types

export class ConnectorTextBlock {}

export function isConnectorTextBlock(block) {
  return block != null && typeof block === 'object' && block.type === 'connector_text'
}
