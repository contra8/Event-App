<script>
    import EventReminder from "./EventReminder.svelte";
    import EventDescription from "./EventDescription.svelte";
</script>

<div class="content">
    <EventDescription />
    <hr />
    <EventReminder />
</div>

<style>
    hr {
        width: 856px;
        border: 1px solid #E1E1E1;
    }

    .content {
        max-width: 860px;
        display: grid;
    }
</style>