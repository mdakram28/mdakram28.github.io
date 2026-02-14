const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log('Puppeteer version:', require('puppeteer/package.json').version);
        console.log('Default executable path:', puppeteer.executablePath());

        const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
        console.log('Trying to launch with:', chromePath);

        const browser = await puppeteer.launch({
            executablePath: chromePath,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        });
        console.log('Browser launched successfully!');
        await browser.close();
    } catch (err) {
        console.error('Failed to launch browser:', err);
        process.exit(1);
    }
})();
