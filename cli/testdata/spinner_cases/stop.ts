import { Spinner } from "../../unstable_spinner.ts";

const spinner = new Spinner();

spinner.start();

setTimeout(() => spinner.stop(), 200);
setTimeout(() => {}, 500);
