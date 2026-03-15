import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type SettingsSection = "account" | "notifications" | "privacy" | "appearance";

interface SettingsNotification {
  id: string;
  type: "success" | "error";
  title: string;
  message: string;
}

export default function SettingsPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<SettingsSection>("account");
  const [notification, setNotification] = useState<SettingsNotification | null>(null);

  const [settings, setSettings] = useState({
    email: "user@example.com",
    fullName: "Nguyen Van A",
    phone: "+84 123 456 789",
    company: "Tech Company",
    position: "Software Engineer",
    emailNotifications: true,
    pushNotifications: false,
    analysisAlerts: true,
    weeklyDigest: true,
    profileVisibility: "public" as "public" | "private" | "connections",
    showAnalysis: true,
    allowDownloads: true,
  });

  const handleSave = () => {
    setNotification({
      id: "save",
      type: "success",
      title: "Settings Saved",
      message: "Your preferences have been updated successfully.",
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const sections = [
    { id: "account" as const, label: "Account", icon: "user" },
    { id: "notifications" as const, label: "Notifications", icon: "bell" },
    { id: "privacy" as const, label: "Privacy", icon: "shield" },
    { id: "appearance" as const, label: "Appearance", icon: "palette" },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "user":
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M10 10a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 17a5 5 0 00-10 0 5 5 0 0010 0z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case "bell":
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M10 2a6 6 0 016 6v3l2 2v1H2v-1l2-2V8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 17a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case "shield":
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l7 3v5c0 5.25-3.5 7.5-7 8.5-3.5-1-7-3.25-7-8.5V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "palette":
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 2v4m0 12v4M2 10h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div
            className={`border border-border-default rounded-2xl shadow-lg p-4 flex items-start gap-3 ${
              notification.type === "success" ? "bg-green-50" : "bg-red-50"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
              {notification.type === "success" ? (
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="none">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-primary leading-5">{notification.title}</h4>
              <p className="text-xs text-text-2ry leading-4 mt-1">{notification.message}</p>
            </div>
            <button onClick={() => setNotification(null)} className="text-text-muted hover:text-primary transition-colors p-1">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      <motion.main
        className="p-8 flex flex-col gap-6 min-h-[calc(100vh-73px)] bg-app-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-primary leading-8">Settings</h1>
          <p className="text-sm font-normal text-text-2ry leading-5">Manage your account preferences and settings.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <nav className="bg-white border border-border-default rounded-[24px] p-4 h-fit">
            <ul className="flex flex-col gap-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      activeSection === section.id
                        ? "bg-primary text-white"
                        : "text-text-2ry hover:bg-[#f5f5f5]"
                    }`}
                  >
                    {renderIcon(section.icon)}
                    <span className="text-sm font-medium">{section.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            {activeSection === "account" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-border-default rounded-[24px] p-6"
              >
                <h2 className="text-lg font-semibold text-primary mb-6">Account Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                      <span className="text-2xl font-semibold text-primary">A</span>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-primary border border-border-default rounded-xl hover:bg-[#f5f5f5] transition-colors">
                      Change Avatar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-primary">Full Name</label>
                      <input
                        type="text"
                        value={settings.fullName}
                        onChange={(e) => setSettings({ ...settings, fullName: e.target.value })}
                        className="h-11 px-4 bg-primary-fg border border-border-default rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-primary">Email</label>
                      <input
                        type="email"
                        value={settings.email}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="h-11 px-4 bg-primary-fg border border-border-default rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-primary">Phone</label>
                      <input
                        type="tel"
                        value={settings.phone}
                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                        className="h-11 px-4 bg-primary-fg border border-border-default rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-primary">Company</label>
                      <input
                        type="text"
                        value={settings.company}
                        onChange={(e) => setSettings({ ...settings, company: e.target.value })}
                        className="h-11 px-4 bg-primary-fg border border-border-default rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-sm font-medium text-primary">Position</label>
                      <input
                        type="text"
                        value={settings.position}
                        onChange={(e) => setSettings({ ...settings, position: e.target.value })}
                        className="h-11 px-4 bg-primary-fg border border-border-default rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "notifications" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-border-default rounded-[24px] p-6"
              >
                <h2 className="text-lg font-semibold text-primary mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border-default">
                    <div>
                      <p className="text-sm font-medium text-primary">Email Notifications</p>
                      <p className="text-xs text-text-2ry mt-0.5">Receive notifications via email</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, emailNotifications: !settings.emailNotifications })}
                      className={`w-12 h-6 rounded-full transition-colors relative ${settings.emailNotifications ? "bg-primary" : "bg-gray-300"}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.emailNotifications ? "left-7" : "left-1"}`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-border-default">
                    <div>
                      <p className="text-sm font-medium text-primary">Push Notifications</p>
                      <p className="text-xs text-text-2ry mt-0.5">Receive push notifications on your device</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, pushNotifications: !settings.pushNotifications })}
                      className={`w-12 h-6 rounded-full transition-colors relative ${settings.pushNotifications ? "bg-primary" : "bg-gray-300"}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.pushNotifications ? "left-7" : "left-1"}`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-border-default">
                    <div>
                      <p className="text-sm font-medium text-primary">Analysis Alerts</p>
                      <p className="text-xs text-text-2ry mt-0.5">Get notified when resume analysis is complete</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, analysisAlerts: !settings.analysisAlerts })}
                      className={`w-12 h-6 rounded-full transition-colors relative ${settings.analysisAlerts ? "bg-primary" : "bg-gray-300"}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.analysisAlerts ? "left-7" : "left-1"}`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-medium text-primary">Weekly Digest</p>
                      <p className="text-xs text-text-2ry mt-0.5">Receive a weekly summary of your activity</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, weeklyDigest: !settings.weeklyDigest })}
                      className={`w-12 h-6 rounded-full transition-colors relative ${settings.weeklyDigest ? "bg-primary" : "bg-gray-300"}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.weeklyDigest ? "left-7" : "left-1"}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "privacy" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-border-default rounded-[24px] p-6"
              >
                <h2 className="text-lg font-semibold text-primary mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-primary mb-3">Profile Visibility</p>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: "public", label: "Public", desc: "Anyone can see your profile" },
                        { value: "private", label: "Private", desc: "Only you can see your profile" },
                        { value: "connections", label: "Connections Only", desc: "Only your connections can see" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${
                            settings.profileVisibility === option.value
                              ? "border-primary bg-blue-50"
                              : "border-border-default hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="profileVisibility"
                            value={option.value}
                            checked={settings.profileVisibility === option.value}
                            onChange={(e) => setSettings({ ...settings, profileVisibility: e.target.value as "public" | "private" | "connections" })}
                            className="sr-only"
                          />
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${settings.profileVisibility === option.value ? "border-primary" : "border-gray-300"}`}>
                            {settings.profileVisibility === option.value && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-primary">{option.label}</p>
                            <p className="text-xs text-text-2ry">{option.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border-default">
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-medium text-primary">Show Analysis History</p>
                        <p className="text-xs text-text-2ry mt-0.5">Allow others to see your analysis history</p>
                      </div>
                      <button
                        onClick={() => setSettings({ ...settings, showAnalysis: !settings.showAnalysis })}
                        className={`w-12 h-6 rounded-full transition-colors relative ${settings.showAnalysis ? "bg-primary" : "bg-gray-300"}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.showAnalysis ? "left-7" : "left-1"}`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-medium text-primary">Allow Downloads</p>
                        <p className="text-xs text-text-2ry mt-0.5">Allow others to download your resumes</p>
                      </div>
                      <button
                        onClick={() => setSettings({ ...settings, allowDownloads: !settings.allowDownloads })}
                        className={`w-12 h-6 rounded-full transition-colors relative ${settings.allowDownloads ? "bg-primary" : "bg-gray-300"}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.allowDownloads ? "left-7" : "left-1"}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === "appearance" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-border-default rounded-[24px] p-6"
              >
                <h2 className="text-lg font-semibold text-primary mb-6">Appearance</h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-primary mb-3">Theme</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "light", label: "Light" },
                        { value: "dark", label: "Dark" },
                        { value: "system", label: "System" },
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          className="flex flex-col items-center gap-2 p-4 border border-border-default rounded-xl hover:border-gray-300 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                            <svg className="w-5 h-5 text-text-2ry" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M10 2v2m0 12v2m9-9h-2M3 10H1m16.95-6.95l-1.414 1.414M4.464 15.536l-1.414 1.414m12.728 0l-1.414-1.414M4.464 4.464L3.05 3.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-primary">{theme.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-primary mb-3">Accent Color</p>
                    <div className="flex gap-3">
                      {["#2563eb", "#7c3aed", "#db2777", "#ea580c", "#16a34a"].map((color) => (
                        <button
                          key={color}
                          className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-primary text-white text-sm font-medium rounded-2xl hover:opacity-90 transition-opacity"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
}
