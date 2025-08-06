import { BACKEND_URL } from "@/components/constants";
import React, { useEffect } from "react";

const Resume = () => {
  const [resume, setResume] = React.useState<string>();
  const getResume = async () => {
    try {
      const resp = await fetch(`${BACKEND_URL}/resume/getResume`);
      const data = await resp.json();
      setResume(data.resumeURL);
    } catch (error) {
      console.error("Failed to fetch resume:", error);
    }
  };

  useEffect(() => {
    getResume();
  }, []);
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <iframe
          src={resume}
          title="Anjul Singh's Resume"
          height="570"
          width="100%"
          className="rounded-xl"
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
