// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

const { createApp } = Vue

  createApp({
    data() {
      return {
        backup: [],
        searchUser: '',
        newMessage : '',
        counter: 0,
        contacts: [
          {
              name: 'Michele',
              avatar: './img/avatar_1.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: './img/avatar_2.jpg',
              visible: true,
              messages: [
                  {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent',
                      dropdown: false
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: './img/avatar_3.jpg',
              visible: true,
              messages: [
                  {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: './img/avatar_4.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: './img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: './img/avatar_6.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: './img/avatar_7.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: './img/avatar_8.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          }
      ]
      
      }
    },
    methods: {
        addCounter(i){
          console.log('cliccato')
          console.log(i)
          this.counter = i
        },
        cpuSend(){
          if(this.newMessage.trim().length > 0){
          let myLet = {
            date: this.getCurrentDateTime(),
            message: this.newMessage,
            status: 'sent'
          }
          this.contacts[this.counter].messages.push(myLet)
          this.newMessage = ''
          setTimeout(() => {
            let myRepost = {
              date: this.getCurrentDateTime(),
              message: 'ok',
              status: 'received'
            }
            this.contacts[this.counter].messages.push(myRepost)
          }, 1000);
        }
        },
        searchChat(){
          /*this.contacts = this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.searchUser.toLowerCase()))
          this.contacts = [...this.backup]*/
          for(let i=0; i<this.contacts.length; i++){
            /*if(this.contacts[i].name.toLowerCase().includes(this.searchUser)){
              this.contacts[i].visible == true;
            }else{
              this.contacts[i].visible == false;
            }*/
            this.contacts[i].visible = this.contacts[i].name.toLowerCase().includes(this.searchUser.toLowerCase());
          }
        },
        onlyHour(i){
           const singleDate = this.contacts[this.counter].messages[i].date
           const split = singleDate.split(' ')
           const singleHour = split[1].split(':').slice(0, 2).join(':')
           return singleHour
        },
        getCurrentDateTime() {
            const oggi = new Date();
            const giorno = oggi.getDate().toString().padStart(2, '0');
            const mese = (oggi.getMonth() + 1).toString().padStart(2, '0');
            const anno = oggi.getFullYear();
            const ore = oggi.getHours().toString().padStart(2, '0');
            const minuti = oggi.getMinutes().toString().padStart(2, '0');
            const secondi = oggi.getSeconds().toString().padStart(2, '0');

            const orarioFinale =`${giorno}/${mese}/${anno} ${ore}:${minuti}:${secondi}`;

            return orarioFinale;
        },
        onlyHourContacts(i, messageIndex){
           const singleDate = this.contacts[i].messages[messageIndex].date
           const split = singleDate.split(' ')
           const singleHour = split[1].split(':').slice(0, 2).join(':')
           return singleHour
        },
        eventDropDown(index){
            this.backup = []
            for (let i = 0; i < this.contacts[this.counter].messages.length; i++) {   
                this.backup.push(false)
            }
            this.backup[index] = !this.backup[index];
            console.log('this.backup: ', this.backup)
        },
        deleteMess(controll){

            if(!this.contacts[this.counter].messages.length > 0) {
                return;
            }
           
            this.contacts[this.counter].messages.splice(controll, 1)
            
            console.log('messages: ', this.contacts[this.counter])
        //     for (let i = 0; i < this.backup.length; i++) {
        //         if (this.backup[i] == true) {
        //             this.backup[i] = false
        //         }
            
        // }         
        }
    }
  }).mount('#app')