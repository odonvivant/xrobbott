/*
*   Should test the totality of the Authentication Service
*/
import {TwitchAuthService} from "./twitch.auth.service";

describe('Twitch Authentication Service', ()=>{

    it('should verify if there is only a single instance',()=>{
        const twitchAuthOriginal = TwitchAuthService.getInstance();
        twitchAuthOriginal.token ='TEST-TOKEN';
        const twitchAuthNew = TwitchAuthService.getInstance();
        expect(twitchAuthNew).toBe(twitchAuthOriginal);
    });

});