const { Holops } = require('holops')
const { VK } = require('vk-io')
const hapi = new Holops('T4J2nNrRXO3BGFnBbHw3VCpcDMWUhIcthnneddo4J6Z1rUq4ydEX6QTU1mEfXwJf', 466116988)
const vk = new VK({
  apiMode: 'parallel',
  apiLimit: 20,
  apiTimeout: 30000,
  token: '7e8310edfedf1dea0e6314ba39a813efa1b4bc01ece8e9a0569f0264c3245c0b60a79c66d352357a2f4ea'
})
const { api } = vk;
const vkMsg = (peer_id, message) => {
	return api.messages.send({
		message,
		peer_id,
		random_id: 0,
	});
}
function run() {
    hapi.start('http://178.67.147.121', 49413);
    hapi.onPayment(context => {
        const {
            amount,
            fromId
        } = context;
        console.log(context);
        let text = `Пришло начисление: ${amount} \nОтправитель: vk.com/id${fromId}`
    	vkMsg(466116988,text)
    });
};

run()
