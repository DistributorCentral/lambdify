const lambdify = require('./../src');
const response = { test: 'this' };

test('request loads event', () => {
	const req = lambdify.request(response);

	expect(req.event).toEqual(response);
});

test('request handles bad json', () => {
	const req = lambdify.request({ body: 'test' });

	expect(req.body).toEqual('test');
});

test('request handles x-forwarded-for header for ip', () => {
	const req = lambdify.request({ headers: { 'X-Forwarded-For': '1.1.1.1' } });

	expect(req.ip).toEqual('1.1.1.1');
});

test('request handles x-forwarded-for header for multiple ips', () => {
	const req = lambdify.request({ headers: { 'X-Forwarded-For': '1.1.1.1,2.2.2.2' } });

	expect(req.ip).toEqual('1.1.1.1');
});