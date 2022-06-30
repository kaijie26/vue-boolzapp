// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],

            currentActiveElement: 0,
            userNewMessageText: '',
            searchFilterName: ''
        },

        methods:{      
            // Funzione che setta l'elemeto correntemente attivo di default al indice degli elementi
            currentActiveContact(index) {
                this.currentActiveElement = index;            
            },

            // Funzione che aggiunge un nuvo messaggio al array attraverso l'imput
            addUserNewMessage(){
                // Elimino tutti i spazzi in eccesso con il trim
                const trimmedUserNewMessageText = this.userNewMessageText.trim()


                if(trimmedUserNewMessageText.length > 0) {
                    // Creo un nuovo oggetto che equivale al messaggio del utente 
                    const newMessageObject = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss '),
                        text: trimmedUserNewMessageText,
                        status: 'sent',
                    };

                    // Lo inserisco nel array dei messaggi  
                    this.contacts[this.currentActiveElement].messages.push(newMessageObject);

                    // Ripulisco l'imput dopo l'invio del messaggio 
                    this.userNewMessageText = '';

                    // Imposto il messaggio del interlocutore settandolo dopo 1 secondo dopo l'invio del messaggio da parte del utente 
                    setTimeout(() => {
                        const newAnswer = {
                            date: dayjs().format(dayjs().format('DD/MM/YYYY HH:mm:ss')),
                            text: 'ok',
                            status: 'received',
                    }
                    //  Inserisco il messaggio del interlocutore nel array dei messaggi

                    this.contacts[this.currentActiveElement].messages.push(newAnswer);


                    } ,1000)
                }

            },

            // Fuznione che filtra il nome sulla barra del input
            filterContactName(){
                // Transformo in minuscolo il testo che da l'utente sul input
                const filterNameLower = this.searchFilterName.toLowerCase();

                // Scorro gli elementi dentro l'array
                this.contacts.forEach(element => {
                    // Transformo i nomi dei singoli object in minuscolo
                    const filterContactNameLower = element.name.toLowerCase();

                    // Applico la condizione del filtro
                      // l'utente inserisce i caratteri e mostra in corrispondeza sulla lista i nomi con quei caratteri del object
                      // Se i caratteri inseriti dal utente non corrispondono agli caratteri dei nomi in contacts allora non mostra nulla
                    if(filterContactNameLower.includes(filterNameLower)){
                        element.visible = true;

                    }else{
                        element.visible = false;

                    };
                    
                    
                });

            }

            
        }
    }
) 