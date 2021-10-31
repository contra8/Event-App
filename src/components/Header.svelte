<div class="header">
    <div class="title">Event App</div>
</div>

<style>
    .header {
        /*
        width: 100%;
        height: 23px;
        margin: 0;
        padding-top: 30px;
        padding-bottom: 42px;
        -webkit-box-shadow: inset 0px 5px 15px 5px #000000;
        box-shadow: inset 0px 5px 15px 5px #000000;
        */
        /*position: absolute;*/
        width: 100%;
        height: 95px;
        left: 0px;
        top: 0px;

        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .title {
        position: absolute;
        /*left: 31.21%;
        right: -1.42%;*/
        top: 30px; /*15.89%;*/
        bottom: 42px; /*23.21%;*/

        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        height: 23px;
        /* identical to box height */
        color: #000000;
    }

    .title:before {
        content: url("../images/thumb-up-icon.svg");
        position: absolute;
        top: -2px;
        left: -40px;
    }
</style>