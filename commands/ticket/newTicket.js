module.exports ={
    name: "newticket",
    type: "interaction",
    prototype: "button",
    code:`
    $interactionReply[;{newEmbed: {color: $getVar[color]}{title: You Ticket Created ✅}};;;everyone;true]
    $setGuildVar[tsn;$sum[$getGuildVar[tsn];1]]
    $newTicket[🎫|ticket-$getGuildVar[tsn];<@$authorId> {newEmbed:
        {description: Hi Welcome To the Ticket Please Wait To Staff Response :)}
        {color: $getVar[color]}

    }{actionRow:{button:Close Ticket:success:closeticket:false}{button:Save:success:save:false}};$getGuildVar[tcs];false;Error!]
    $cooldown[30s; You Can Open New Ticket In %time% {options:{ephemeral}}
    {extraOptions:{interaction}}]
    `
}