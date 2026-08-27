import { useUserStore } from "../../store/useUserStore";
import AdminIcon from "../icons/AdminIcon";
import UserIcon from "../icons/UserIcon";

export const AuthWidget = () => {
  const { user } = useUserStore();
  if (user)
    return (
      <div className="absolute flex flex-col bg-sky-900 p-2 rounded-2xl right-4 top-4 gap-1">
        <div className="flex items-end gap-1">
          {user.role === "admin" ? (
            <AdminIcon className="w-10 h-10" />
          ) : (
            <UserIcon className="w-10 h-10" />
          )}
          <p className="text-white">{user.name}</p>
        </div>
        <div className="text-amber-300">{user.role}</div>
      </div>
    );
};
