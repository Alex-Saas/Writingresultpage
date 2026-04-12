import { useState } from 'react';
import { UserState, USER_STATE_LABELS } from './types';

interface UserStateSwitcherProps {
  value: UserState;
  onChange: (state: UserState) => void;
}

export function UserStateSwitcher({ value, onChange }: UserStateSwitcherProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 left-6 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      {open && (
        <div className="mb-2 bg-white rounded-2xl shadow-2xl border border-[#EEEEEE] p-3 w-52">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Preview as user
          </p>
          <div className="flex flex-col gap-1">
            {(Object.keys(USER_STATE_LABELS) as UserState[]).map((state) => (
              <button
                key={state}
                onClick={() => { onChange(state); setOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                  value === state
                    ? 'bg-[#012269] text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {USER_STATE_LABELS[state]}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-[#012269] text-white px-4 py-2.5 rounded-full shadow-lg text-[13px] font-semibold hover:bg-[#011a50] transition-colors"
      >
        <span>👤</span>
        <span>{USER_STATE_LABELS[value]}</span>
        <span className="opacity-70">{open ? '▲' : '▼'}</span>
      </button>
    </div>
  );
}
