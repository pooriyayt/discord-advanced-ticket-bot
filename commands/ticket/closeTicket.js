module.exports ={
    name: "closeticket",
    type: "interaction",
    prototype: "button",
    code:`
    $closeTicket
    $wait[5s]
    $interactionReply[;{newEmbed: {description: This Ticket Close In 5s ✅}{color: $getVar[color]}};;;everyone]
    `
}