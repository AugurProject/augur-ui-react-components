import { makeNumber } from '../utils/make-number';

const loginAccount = {
	id: '0x45a153fdd97836c2b349a5f53970dc44b0ef1efa',
	prettyAddress: '0x45...1efa',
	localNode: false,
	secureLoginID: 'testID123ASDW3N193NF7V123ADW25579130239SE1235189ADJWKRUY8123AOUELOREMIPSUMDOLORSITAMETCONSECTETURADIPISICINGELITSEDDOEIUSMODTEMPORINCIDIDUNTUTLABOREETDOLOREMAGNAALIQUAUTENIMADMINIMVENIAMQUISNOSTRUDEXERCITATIONULLAMCOLABORISNISIUTALIQUIPEXEACOMMODOCONSEQUATDUISAUTEIRUREDOLORINREPREHENDERITINVOLUPTATEVELITESSECILLUMDOLOREEUFUGIATNULLAPARIATUREXCEPTEURSINTOCCAECATCUPIDATATNONPROIDENTSUNTINCULPAQUIOFFICIADESERUNTMOLLITANIMIDESTLABORUM',
	prettySecureLoginID: 'test...ORUM',
	rep: makeNumber(47, 'rep'),
	ether: makeNumber(10000, 'eth'),
	realEther: makeNumber(2.5, 'eth'),
	name: 'MrTestTesterson'
};

loginAccount.linkText = loginAccount.localNode ? loginAccount.prettyAddress : loginAccount.name || loginAccount.prettySecureLoginID;
const date = new Date()
	.toISOString()
	.split(':')
	.join('-');
loginAccount.downloadAccountDataString = `data:,${encodeURIComponent(JSON.stringify(loginAccount))}`;
loginAccount.downloadAccountFileName = `UTC--${date}--${loginAccount.id}`;

loginAccount.signIn = (name = loginAccount.name) => {
	require('../selectors').update({ loginAccount: {
		...loginAccount,
		name,
		editName: loginAccount.editName,
		transferFunds: loginAccount.transferFunds,
		signOut: loginAccount.signOut
	}
	});
	loginAccount.editName(name);
};

loginAccount.editName = (name) => {
	loginAccount.name = (name && name !== '') ? name : undefined;
	loginAccount.linkText = loginAccount.name || loginAccount.prettySecureLoginID;
};

loginAccount.transferFunds = (amount, to) => {
	console.log(`Sending ${amount}eth to: ${to}`);
};

loginAccount.signIn = (name = loginAccount.name) => {
	require('../selectors').update({ loginAccount: {
		...loginAccount,
		name,
		editName: loginAccount.editName,
		transferFunds: loginAccount.transferFunds,
		signOut: loginAccount.signOut
	}
	});
	loginAccount.editName(name);
};

loginAccount.signOut = () => {
	require('../selectors').update({
		loginAccount: {
			signIn: loginAccount.signIn
		}
	});
};

export default loginAccount;
