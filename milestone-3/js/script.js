// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

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

            }
        }
    }
) 