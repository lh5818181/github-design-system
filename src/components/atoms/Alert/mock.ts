export const mockData = {
  defaultProps: {
    variant: 'info' as const, 
    children: 'Uma mensagem de alerta padrão.',
    isDismissible: false,
    onDismiss: () => console.log('Alerta fechado')
  }
};