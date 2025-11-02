self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    // You can add logic to open app or focus window
    event.waitUntil(
        clients.openWindow('/')
    );
});

self.addEventListener('push', function (event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Road Safety Update';
    const body = data.body || 'Stay safe on the road!';
    const icon = data.icon || '/safety-icon.png';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: 'safe‑driving‑push'
        })
    );
});
