# SquadStack Frontend Exercise

## Project Structure

The project is structured in a way that all the data relating to the prices (provided in the google doc) is saved in a separate file.
File - src/prices.js

The App Component carries most of the major components required to build the project, which includes the following:
1. PriceTabs - For price groups to the top
2. PlanContainer - A container for all the plans
3. Modal - The popup modal that opens upon user selecting a plan
4. Offine - To show the "No Internet Connection" screen.

The App Component handles the following functionality:
1. Fetching price group, if user has already selected a price group in past.
2. Checking status of user if online or offline
3. Keeping a track of current selected price group
4. Keeping a track of current selected plan
5. Toggling the state of the modal

## Components Overview
The following components were used in the project:

### 1. PriceTabs - For price groups to the top.
    PriceTabs component fetches the unique price tabs available in the data, and then maps over them to create tabs for different price segments.
    Upon selection, the price group is changed in the App Component using a function passed down as prop

### 2. PlanContainer - A container for all the plans.
    PlanContainer contains all the individual plans using the PlanTab Component. The component filters the plans in the same price group as selected in the above component, and renders them.

### 3. PlanTab - A card for each plan in the plan container.
    PlanTab component renders the individual card for each of the plan including all its details. It checks upon certain conditions like popular, or enterprise details passed down as props, and renders accordingly.

### 4. Modal - The popup modal that opens upon user selecting a plan.
    Modal component is triggered from the PlanTab Component upon clicking any of the plan. The plan details are propogated to the App component, and is further propped down to the modal.

### 5. Offine - To show the "No Internet Connection" screen.
    Offline component rendered by the App component renders when the user gets off an internet working connection, and is hidden once the internet connection is restored. The state of isOnline is initially set to true assuming the person at the time of fetching the page must have an active internet connection.

### 6. FormInput - A component for the customized input fields in the modal.
    The FormInput component renders different types of inputs that were used in the current exercise. The functionality maybe divided into multiple different components upon scaling the project.

## Initializing the App

```npm start```