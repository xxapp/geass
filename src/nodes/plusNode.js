import PlusComponent from "../components/PlusComponent";

export default {
    name: 'plus',
    inputs: [
        { name: 'n1', type: 'number' },
        { name: 'n2', type: 'number' },
    ],
    outputs: [
        { name: 'result', type: 'number' },
    ],
    implement: function(n1, n2) {
        return n1 + n2;
    },
    component: PlusComponent,
};