import { render, fireEvent, screen } from '@testing-library/svelte';
import Counter from './Counter.svelte';

describe('Counter.svelte', async () => {
	test('カウンターの初期値は0', async () => {
		render(Counter);
		expect(screen.getByText('0')).toBeTruthy();
	});
	test('減算処理', async () => {
		render(Counter);
		const decreaseButton = screen.getByLabelText('Decrease the counter by one');
		await fireEvent.click(decreaseButton);
		await fireEvent.click(decreaseButton);
		const counter = await screen.findByText('-2');
		expect(counter).toBeTruthy();
	});
	test('加算処理', async () => {
		render(Counter);
		const increaseButton = screen.getByLabelText('Increase the counter by one');
		await fireEvent.click(increaseButton);
		const counter = await screen.findByText('1');
		expect(counter).toBeTruthy();
	});
});