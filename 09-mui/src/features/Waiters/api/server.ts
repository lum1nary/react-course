import {WaitersApi} from "./WaitersApi";
import {FetchClient} from "../../../api/FetchClient";

const URL = 'http://localhost:4000/waiters';

export const WaitersApiInstance = new WaitersApi(new FetchClient(URL));