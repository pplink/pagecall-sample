import { PageCallAPIKey, PageCallAPISecret, PageCallEndpoint } from '../config';
import { PageCall } from 'pagecall';
import * as express from 'express';
const router = express.Router();
const pagecall = new PageCall({
  apiKey: PageCallAPIKey,
  apiSecret: PageCallAPISecret,
  apiEndPoint: PageCallEndpoint
});
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/connect-in', async (req, res, next) => {
  const param = {
    userId: req.body.myId,
    publicRoomId: req.body.publicRoomId,
    allowedTime: '60',
    userData: {
      // ...
    },
    roomData: {
      title: 'pagecall-demo'
    },
    template: {
      // ...
    }
  };
  const { html } = await pagecall.connectIn(param);
  res.send(html);
});
export {router};
