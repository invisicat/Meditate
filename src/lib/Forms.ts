import React from "react";

import ChooseAmbience from "@/components/forms/start/ChooseAmbience";
import Start from "@/components/forms/start/Start";
import Test from "@/components/forms/start/Test";

export type FormItem = {
    name: string;
    component: React.ComponentType<FormProps>;
}

export type FormProps = {
    continue: () => void;
    back: () => void;
}
export const FormsList: FormItem[] = [
    { name: "Start", component: Start },
    { name: "Ambience", component: ChooseAmbience },
    { name: "test", component: Test },
]


