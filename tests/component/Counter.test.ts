import { test, expect } from '@playwright/experimental-ct-svelte';
import Counter from '$lib/Counter.svelte';

test('Counter.svelte', async ({ mount }) => {
    const component = await mount(Counter);
    await expect(component).toContainText("0");
    await component.locator('[aria-label="Decrease the counter by one"]').dblclick();
    await expect(component).toContainText('-2');
    await component.locator('[aria-label="Increase the counter by one"]').click();
    await expect(component).toContainText('-1');
});