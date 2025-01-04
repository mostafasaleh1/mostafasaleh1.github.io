import Clarity from '@microsoft/clarity';

export const MicrosoftClarity = () => {
    const projectId = "p53wo1qyhe"
    Clarity.init(projectId);
    Clarity.identify("custom-id", "custom-session-id", "custom-page-id", "friendly-name");
    Clarity.setTag("key", "value");
    Clarity.event("custom-event");
    Clarity.consent();
    Clarity.consent(false);
    Clarity.upgrade("reason");
}