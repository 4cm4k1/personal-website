interface RegisterParameters {
  path?: string;
}

function register({ path = '/sw.js' }: RegisterParameters = {}): void {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker
      .register(path)
      .then(() => console.log('Registered ServiceWorker!'))
      .catch(err => console.log('Failed to register!', err));
}

function unregister(): void {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.ready.then(reg =>
      reg
        .unregister()
        .then(() => console.log('Unregistered ServiceWorker!'))
        .catch(err => console.log('Failed to unregister ServiceWorker!', err)),
    );
}
export { register, unregister };
