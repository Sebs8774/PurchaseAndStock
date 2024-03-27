const phoneBook = document.querySelector('.PhoneBook')

const volvo = [
	{
		title: "Central Nordeste",
		link: "https://api.whatsapp.com/send?phone=5585988673737"
	},
	{
		title: "Maciço ",
		link: "https://api.whatsapp.com/send?phone=5585997321340"
	},
	{
		title: "Menor Preço",
		link: "https://api.whatsapp.com/send?phone=5585988681932"
	},
	{
		title: "Volvo Tracbel",
		link: "https://api.whatsapp.com/send?phone=5585989469877"
	},
	{
		title: "Arcanjo Peças",
		link: "https://api.whatsapp.com/send?phone=5585991560597"
	},
]

const contact = function(user) {
    return (
        `
            <div class="contact">
                <p>${user.title}</p>
                <button>
                    <a href="${user.link}">
                        <img src="../../public/Whatsapp.svg" alt="Whatsapp">
                    </a>
                </button>
            </div>
        `
    )
}

phoneBook.innerHTML = volvo.map((user) => {
    return contact(user)
    }
).join('')