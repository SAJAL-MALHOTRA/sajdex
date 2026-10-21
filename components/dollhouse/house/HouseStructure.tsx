'use client';

import HouseRoof from './HouseRoof';
import RoomAboutMe from './RoomAboutMe';
import RoomProjects from './RoomProjects';
import RoomEducation from './RoomEducation';
import RoomExperience from './RoomExperience';
import RoomStaircase from './RoomStaircase';
import RoomAchievements from './RoomAchievements';
import RoomSkills from './RoomSkills';
import RoomGarage from './RoomGarage';
import RoomContact from './RoomContact';

interface HouseStructureProps {
  onOpenRoom: (room: string) => void;
  activeRoom: string | null;
  onOpenProjectModal?: (id: string) => void;
}

export default function HouseStructure({
  onOpenRoom,
  activeRoom,
  onOpenProjectModal,
}: HouseStructureProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center select-none">
      {/* ─── 1. ROOF & RIGHT CHIMNEY ─── */}
      <HouseRoof />

      {/* ─── 2. MAIN 3x3 DOLLHOUSE STRUCTURE ─── */}
      <div className="relative w-full bg-[#8D5B3A] border-3 sm:border-4 border-[#54301B] rounded-xs shadow-2xl overflow-hidden pixel-box-shadow p-1 sm:p-1.5 space-y-1 sm:space-y-1.5">
        
        {/* ── TOP FLOOR (LEVEL 3): ABOUT ME | PROJECTS | EDUCATION ── */}
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 h-[clamp(85px,19vh,135px)]">
          <div id="room-about" className="h-full">
            <RoomAboutMe
              onOpen={() => onOpenRoom('about')}
              isActive={activeRoom === 'about'}
            />
          </div>

          <div id="room-projects" className="h-full">
            <RoomProjects
              onOpen={() => onOpenRoom('projects')}
              isActive={activeRoom === 'projects'}
              onOpenProjectModal={onOpenProjectModal}
            />
          </div>

          <div id="room-education" className="h-full">
            <RoomEducation
              onOpen={() => onOpenRoom('education')}
              isActive={activeRoom === 'education'}
            />
          </div>
        </div>

        {/* Horizontal Wooden Divider Beam (Level 3 -> Level 2) */}
        <div className="w-full h-1 sm:h-1.5 bg-[#6D4125] border-y border-[#54301B]" />

        {/* ── MIDDLE FLOOR (LEVEL 2): EXPERIENCE | STAIRCASE | ACHIEVEMENTS ── */}
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 h-[clamp(85px,19vh,135px)]">
          <div id="room-experience" className="h-full">
            <RoomExperience
              onOpen={() => onOpenRoom('experience')}
              isActive={activeRoom === 'experience'}
            />
          </div>

          <div id="room-staircase" className="h-full">
            <RoomStaircase
              onOpen={() => onOpenRoom('staircase')}
              isActive={activeRoom === 'staircase'}
            />
          </div>

          <div id="room-achievements" className="h-full">
            <RoomAchievements
              onOpen={() => onOpenRoom('achievements')}
              isActive={activeRoom === 'achievements'}
            />
          </div>
        </div>

        {/* Horizontal Wooden Divider Beam (Level 2 -> Level 1) */}
        <div className="w-full h-1 sm:h-1.5 bg-[#6D4125] border-y border-[#54301B]" />

        {/* ── GROUND FLOOR (LEVEL 1): SKILLS | RESUME | CONTACT ── */}
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 h-[clamp(85px,19vh,135px)]">
          <div id="room-skills" className="h-full">
            <RoomSkills
              onOpen={() => onOpenRoom('skills')}
              isActive={activeRoom === 'skills'}
            />
          </div>

          <div id="room-resume" className="h-full">
            <RoomGarage
              onOpen={() => onOpenRoom('resume')}
              isActive={activeRoom === 'resume'}
            />
          </div>

          <div id="room-contact" className="h-full">
            <RoomContact
              onOpen={() => onOpenRoom('contact')}
              isActive={activeRoom === 'contact'}
            />
          </div>
        </div>
      </div>

      {/* House Foundation / Sill Strip */}
      <div className="w-[101.5%] h-2.5 bg-[#6D4125] border-x-3 sm:border-x-4 border-b-3 sm:border-b-4 border-[#3D2213] rounded-b-sm shadow-md" />
    </div>
  );
}