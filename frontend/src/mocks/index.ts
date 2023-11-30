export async function initMocks() {
  if (typeof window !== 'undefined') {
    const { worker } = await import('./browser');
    console.log('worker start');
    worker.start();
  }
}
