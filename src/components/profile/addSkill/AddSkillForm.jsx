import { useState } from "react";
import CheckBox from "./checkBox";
import Counter from "./Counter";
import Buttons from "./Buttons";
import Input from "./Input";
import Options from "./Options";
import { getAllSkills, getAllAreas } from "services/skill";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ReactLoading from "react-loading";
import { addSkills } from "services/skill";
import { toast } from "react-toastify";

function AddSkillForm({ isNormalSkill, setIsAddOpen }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedAreas, setSelectedAreas] = useState(null);

  const { data: allSkills } = useQuery({
    queryKey: ["allSkills"],
    queryFn: getAllSkills,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["allAreas"],
    queryFn: getAllAreas,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addSkills,
  });

  const queryClient = useQueryClient();

  const clickHandler = () => {
    mutate(
      { skill_id: selectedSkill.value, isNormalSkill },
      {
        onSuccess: () => {
          toast.success("اطلاعات با موفقیت ذخیره شد");
          queryClient.invalidateQueries({ queryKey: ["profile"] });
          setIsAddOpen(false);
        },
        onError: () => {
          toast.error("ذخیره اطلاعات با شکست همراه شد");
        },
      }
    );
  };

  return (
    <div className="w-full">
      <h1 className="text-[24px] text-[#494953] text-right font-yekan font-semibold mb-9">
        مهارت جدید
      </h1>
      <div className="w-full h-[501px] bg-[#EDF2F6] rounded-[10px] p-4">
        <div className="h-full">
          {isLoading ? (
            <div className="flex h-full items-center justify-center">
              <ReactLoading
                type={"spinningBubbles"}
                color={"#615EFC"}
                height={50}
                width={50}
              />
            </div>
          ) : (
            <>
              <Options
                allSkills={allSkills.response.data.results}
                allAreas={data.response.data.results}
                selectedAreas={selectedAreas}
                selectedSkill={selectedSkill}
                setSelectedAreas={setSelectedAreas}
                setSelectedSkill={setSelectedSkill}
              />
              <Input />
              <CheckBox />
              <Counter />
              <Buttons
                setIsAddOpen={setIsAddOpen}
                isDisable={isPending}
                clickHandler={clickHandler}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddSkillForm;
