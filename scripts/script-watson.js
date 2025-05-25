window.watsonAssistantChatOptions = {
    integrationID: "0a7a4228-b595-47c6-bfd2-60d13a0683f8", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "012fc685-c491-4b8b-8acb-83082ea5b286", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});