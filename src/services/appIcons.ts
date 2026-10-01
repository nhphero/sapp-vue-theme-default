import type { Component } from 'vue';
import {
  Activity, Archive, Award, Banknote, BarChart3, Bell, Book, BookOpen, Box, Boxes, Braces, Briefcase,
  Building, Building2, Calendar, CalendarDays, Camera, Car, ClipboardCheck, ClipboardList, Clock, Cloud,
  Code, Compass, Contact, Cpu, CreditCard, Database, DollarSign, Factory, FileText, Files, Flag, Folder,
  FolderOpen, Gauge, Gavel, GitBranch, Globe, GraduationCap, Hammer, Handshake, HardHat, Headphones,
  Heart, Home, Hotel, Image, Key, KeyRound, Landmark, LayoutDashboard, LayoutGrid, Layers, ListChecks,
  Lock, Mail, Map, MapPin, Megaphone, MessageSquare, Network, Package, Palette, Phone, PieChart, PiggyBank,
  Receipt, Rocket, Ruler, Scale, Server, Settings, Shield, ShieldCheck, ShoppingBag, ShoppingCart,
  Sparkles, Star, Store, Tag, Tags, Target, Terminal, TrendingUp, Truck, User, UserCog, Users, Video,
  Wallet, Warehouse, Workflow, Wrench, Zap,
} from 'lucide-vue-next';

/**
 * Icons an app (registry `icon`) can carry — by Lucide name, as stored ("Database", "BookOpen").
 * A curated set, not the whole of Lucide: every app list (Header, Home, Admin) resolves through it,
 * and `form.icon-picker` offers exactly these. Add one here to make it pickable everywhere.
 */
export const APP_ICONS: Readonly<Record<string, Component>> = {
  Layers, LayoutGrid, LayoutDashboard, Globe, Shield, ShieldCheck, Zap, Box, Package, Boxes, Terminal,
  Cpu, Database, Server, Cloud, Code, Braces, Network, Workflow, GitBranch, BookOpen, Book, FileText,
  Files, Folder, FolderOpen, Archive, ClipboardList, ClipboardCheck, ListChecks, Building, Building2,
  Home, Hotel, Landmark, Factory, Store, Warehouse, HardHat, Ruler, Hammer, Wrench, MapPin, Map, Compass,
  Users, User, UserCog, Contact, Briefcase, Handshake, GraduationCap, Award, Wallet, CreditCard, Receipt,
  Banknote, DollarSign, PiggyBank, Scale, Gavel, BarChart3, PieChart, TrendingUp, Activity, Gauge, Target,
  Calendar, CalendarDays, Clock, Bell, Mail, MessageSquare, Phone, Megaphone, ShoppingCart, ShoppingBag,
  Tag, Tags, Truck, Car, Key, KeyRound, Lock, Settings, Rocket, Star, Heart, Sparkles, Flag, Palette,
  Image, Camera, Video, Headphones,
};

export const APP_ICON_NAMES: readonly string[] = Object.keys(APP_ICONS);

/** The component of an icon name; unknown or empty → LayoutGrid. */
export const appIcon = (name?: string | null): Component => (name && APP_ICONS[name]) || LayoutGrid;
