import React from "react";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 1, title: "Frontend Developer", company: "Company A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 2, title: "Backend Developer", company: "Company B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
  { id: 3, title: "Full Stack Developer", company: "Company C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "},
];

const JobList = () => {
  return (
    <div className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="job-item p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-300">
            <h3 className="text-black font-extrabold">{job.title}</h3>
            <h5 className="font-semibold">{job.company}</h5>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
