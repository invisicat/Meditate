import Start from "@/components/forms/start/Start";
import Test from "@/components/forms/start/Test";
import React from "react";

export type FormItem = {
    name: string;
    component: React.ComponentType<FormProps>;
}

export type FormProps = {
    continue: () => void;
}
export const FormsList: FormItem[] = [
    { name: "Start", component: Start },
    { name: "test", component: Test },
]


