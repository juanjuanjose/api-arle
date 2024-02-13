
import app from './app';
import { starConection } from './database';

async function main() {
    starConection();
 app.listen(app.get('port'));
    console.log('server of port', app.get('port'));
}
main();