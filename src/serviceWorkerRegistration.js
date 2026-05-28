export function register() {

  if ('serviceWorker' in navigator) {

    window.addEventListener('load', () => {

      navigator.serviceWorker
        .register('/pokemon2/service-worker.js')

        .then((registration) => {

          console.log(
            'Service Worker registrado:',
            registration
          );
        })

        .catch((error) => {

          console.log(
            'Erro ao registrar Service Worker:',
            error
          );
        });
    });
  }
}