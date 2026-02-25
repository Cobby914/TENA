/* Remember to change the placeholder logo to the profile picture of 
   the board members when those are available! */

import placeholder from "../../assets/logoplaceholder.png";

export function BoardMember(member, ind){

    const name = String(member.first_name ?? "John").trim() + " " + String(member.last_name ?? "Doe").trim();
    const role = String(member.role ?? "Insert Position"); 

    
    const imkey = typeof member.image_key === "string" ? member.image_key.trim() : "";
    
    const im = imkey ? imkey.startsWith("http") ? imakey: `/team/${imkey}` : placeholder;

    const id = String(member.id).trim();

    return {id, name, role, im};
}