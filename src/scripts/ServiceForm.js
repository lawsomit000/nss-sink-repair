
    export const ServiceForm = () => {
        let html = `
        <section class="fields">
            <div class="field">
                <label class="label" for="serviceDescription">Description</label>
                <input type="text" name="serviceDescription" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceAddress">Address</label>
                <input type="text" name="serviceAddress" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceBudget">Budget</label>
                <input type="number" name="serviceBudget" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceDate">Date needed</label>
                <input type="date" name="serviceDate" class="input" />
            </div>
        </section>
        <section>
            <button class="button" id="submitRequest">Submit Request</button>
        </section>
        `
    
        return html
    }

