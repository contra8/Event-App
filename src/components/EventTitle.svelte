<div class="event-title-container">
    <div class="event-title">
        The Rolling Stones
    </div>
    <div class="top-event">top-event</div>
</div>

<style>
    .event-title-container {
        height: 47px;
        font-size: 32px;
        line-height: 146%;
        /* identical to box height, or 47px */

        letter-spacing: -0.01em;

        color: #000000;
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
    }

    .top-event {
        height: 20px;
        margin-left: 10px;
        margin-top: 5px;
        padding: 8px 15px 5px 15px;
        background: #6800ED;
        border-radius: 10px;
        color: #FFFFFF;
        font-size: 14px;
        line-height: 19.6px;
    }

    @media only screen and (max-width: 420px) {
        .top-event {
            height: 40px;
        }
        .event-title-container {
            line-height: 100%;
            margin-top: 10px;
            margin-bottom: 50px;
        }
    }
</style>
