import List "mo:core/List";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Types
  type Timestamp = Time.Time;

  type Lead = {
    name : Text;
    email : Text;
    phone : ?Text;
    businessStage : ?Text;
    message : Text;
    timestamp : Timestamp;
  };

  public type UserProfile = {
    name : Text;
  };

  module Lead {
    public func compare(l1 : Lead, l2 : Lead) : Order.Order {
      Text.compare(l1.email, l2.email);
    };

    public func compareByTimestamp(l1 : Lead, l2 : Lead) : Order.Order {
      Int.compare(l1.timestamp, l2.timestamp);
    };
  };

  // Storage for leads
  let leadsStorage = Map.empty<Text, Lead>();

  // Storage for user profiles
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Lead Submission - Public (no authorization required, guests can submit)
  public shared ({ caller }) func submitLead(
    name : Text,
    email : Text,
    phone : ?Text,
    businessStage : ?Text,
    message : Text,
  ) : async () {
    let timestamp = Time.now();
    let lead : Lead = {
      name;
      email;
      phone;
      businessStage;
      message;
      timestamp;
    };

    if (leadsStorage.containsKey(email)) {
      Runtime.trap("Email already exists");
    };

    leadsStorage.add(email, lead);
  };

  // Admin-only query functions
  public query ({ caller }) func getAllLeadsOrderedByName() : async [Lead] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leadsStorage.values().toArray().sort();
  };

  public query ({ caller }) func getAllLeadsOrderedByTimestamp() : async [Lead] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leadsStorage.values().toArray().sort(Lead.compareByTimestamp);
  };

  public query ({ caller }) func getLeadsByBusinessStage(stage : Text) : async [Lead] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leadsStorage.values().toArray().filter(
      func(lead : Lead) : Bool {
        switch (lead.businessStage) {
          case (null) { Text.equal(stage, "") };
          case (?s) { Text.equal(s, stage) };
        };
      }
    );
  };
};
