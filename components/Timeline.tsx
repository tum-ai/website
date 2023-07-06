// import an asset out of public/assets/e-lab/phases/building.jpeg in Next.js
import Image from 'next/image';



export default function Timeline() {
    return (
      <section className="items-center py-24 font-poppins dark:bg-gray-800">
        <div className="justify-center max-w-6xl py-4 lg:py-8 md:px-6 z-0">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <h1 className="text-6xl font-bold leading-tight dark:text-gray-300">
                  Timeline
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div className="flex-1 h-2 bg-blue-400"></div>
                  <div className="flex-1 h-2 bg-blue-600"></div>
                </div>
              </div>
              <p className="mb-16 text-base text-center text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
                magni eius eaque? Pariatur numquam, odio quod nobis ipsum ex
                cupiditate?
              </p>
            </div>
          </div>
          <div className="w-full mx-auto lg:max-w-3xl">
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                    <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                  </div>
                </div>
                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
              </div>
              <div>
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                  2nd October - 15th October 2023
                </h2>
                <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                  <div className="relative z-20 p-6">
                  <img
                      src="/assets/e-lab/phases/co-founder.jpg"
                      alt="Phase 1 Image"
                      className="w-full mb-6"
                    />
                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      Phase 1: Formation and Exploration (2 Weeks)
                    </p>
                    <p className="text-gray-700 dark:text-gray-500">
                      You will interact with potential co-founders, explore ideas
                      and form teams through the AI E-Lab onboarding, co-founder
                      matching/team building, and ideation activities. This phase
                      will end with a relaxed informal event where you and your
                      team will share your ideas and concepts. Everybody who finds
                      a team is admitted to the next stage.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                    <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                  </div>
                </div>
                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
              </div>
              <div>
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                  16th October - 12th November 2023 (4 Weeks)
                </h2>
                <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                <img
                      src="/assets/e-lab/phases/ideation.jpeg"
                      alt="Phase 2 Image"
                      className="w-full mb-6"
                    />
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      Phase 2: Idea Validation and Litmus Tes
                    </p>
                    <p className="text-gray-700 dark:text-gray-500">
                      You will focus on validating and shaping your startup idea
                      from the previous phase through market research and
                      developing robust business models that will undergo
                      evaluation in the first pitch event, a Litmus Test to a
                      jury.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                    <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                  </div>
                </div>
                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
              </div>
              <div>
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                  13th November - 10 December 2023 (4 Weeks)
                </h2>
  
                <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                  <div className="relative z-20 p-6">
                  <img
                      src="/assets/e-lab/phases/building.jpeg"
                      alt="Phase 3 Image"
                      className="w-full mb-6"
                    />
                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      Phase 3: Build-Measure-Learn
                    </p>
                    <p className="text-gray-700 dark:text-gray-500">
                      If your team can make it through the Litmus Test with
                      validated ideas you will start to build prototypes, measure
                      performance, gather valuable feedback from mentors, industry
                      experts, and customers, and continuously iterate towards
                      achieving product-market fit. This phase will end with a
                      Stress test (second pitch event) where a more experienced
                      jury will rigorously test the product market fit and
                      prototypes of your startup and determine who is fit enough
                      to make it to the final pitch to pitch to investors in Phase
                      4.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                    <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                  </div>
                </div>
                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
              </div>
              <div>
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                    11th December 2023 - 19th Januray 2024 (4 Weeks)
                </h2>
                <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                  <div className="relative z-20 p-6">
                  <img
                      src="/assets/e-lab/phases/final-pitch.jpg"
                      alt="Phase 4 Image"
                      className="w-full mb-6"
                    />
                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      Phase 4: Refinement and Final Pitch
                    </p>
                    <p className="text-gray-700 dark:text-gray-500">
                      Should your team successfully pass the Stress Test, you will
                      continue to refine your prototypes into Minimum Viable
                      Products (MVPs) and further refine your business models, and
                      pitches based on the valuable feedback received from
                      customers, mentors, industry experts, and the jury during
                      the Stress Test. The goal of your startup in this phase will
                      be to prepare to showcase your polished startups to real
                      investors and a public audience in the AI E-Lab final pitch
                      event.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }