const { app, Menu } = require('electron');

const isMac = process.platform === 'darwin';

const menuTemplate = {
    // { role: 'appMenu'}
    ...(isMac
        ? [
              {
                  label: app.name,
                  submenu: [
                      { role: 'about' },
                      { type: 'separator' },
                      { role: 'quit' },
                  ],
              },
          ]
        : []),
    
};
