import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to about:blank
  await page.goto('about:blank');

  // Go to chrome-error://chromewebdata/
  await page.goto('chrome-error://chromewebdata/');

  // Click text=Paramètres avancés
  await page.locator('text=Paramètres avancés').click();

  // Click text=Continuer vers le site localhost (dangereux)
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://localhost:3000/' }*/),
    page.locator('text=Continuer vers le site localhost (dangereux)').click()
  ]);

  // Click img[alt="fr flag"]
  await page.locator('img[alt="fr flag"]').click();

  // Click text=Fin de la partie
  await page.locator('text=Fin de la partie').click();
  await expect(page).toHaveURL('https://localhost:3000/piece?truth=en-of-journey');

  // Click text=La vérité n'a aucune importanceLa temps n'a qu'une unique portanceLe choix est u
  await page.locator('text=La vérité n\'a aucune importanceLa temps n\'a qu\'une unique portanceLe choix est u').click();

  // Click text=Back
  await page.locator('text=Back').click();
  await expect(page).toHaveURL('https://localhost:3000/');

});