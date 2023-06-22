export const twitchAuthURL = (clientID, redirectURL) => {
    const scopes = ["channel:manage:polls", "moderator:manage:banned_users"]; 
    const scopeString = scopes.join("+"); 
    return `https://id.twitch.tv/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopeString}&response_type=code`;
}