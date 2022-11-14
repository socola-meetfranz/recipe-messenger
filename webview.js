module.exports = (Franz) => {
  function getMessages() {
    let count = 0;
    count += document.querySelectorAll('div[aria-label="Đoạn chat"] a[href^="/e2ee/t/"] .x6s0dn4.x1iwo8zk.x1033uif.x179ill4.x1b60jn0.x9f619.x3nfvp2.xl56j7k.x1spa7qu.x170jfvy.x1fsd2vl').length;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);

  /* Enable desktop notifications in messenger settings */
  localStorage.setItem('_cs_desktopNotifsEnabled', JSON.stringify({ __t: new Date().getTime(), __v: true }));

  if (typeof Franz.onNotify === 'function') {
    Franz.onNotify((notification) => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'Messenger';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body = (((notification.options.body || {}).props || {}).content || [])[0] || '';
      }

      return notification;
    });
  }

  Franz.injectCSS(path.join(__dirname, 'service.css'));
};