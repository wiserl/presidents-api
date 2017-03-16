import {Router} from 'Express';
import Presidents from '../data/presidents';


const app = new Router();

app.route('/')
   .get((req, res) => {
    return res.json(Presidents);
});
app.route('/Democrats')
   .get((req, res) => {
       return res.json(Presidents.filter ( president => president.party === 'Democratic') );
   });

   app.route('/Republicans')
   .get((req, res) => {
       return res.json(Presidents.filter ( president => president.party === 'Republican') );
   });
   app.route('/Other')
   .get((req, res) => {
       return res.json(Presidents.filter ( president => president.party != 'Republican' &  president.party != 'Democratic') );
   });

export default app;

