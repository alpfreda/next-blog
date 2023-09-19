If you're like many developers, you may find yourself in a situation where you need to work with multiple Git profiles on a single computer. Perhaps you work
for multiple companies, contribute to open-source projects, or simply want to keep your personal and professional Git activities separate. In any case, managing
different email addresses and identities in Git can be a bit tricky, but fear not – we're here to guide you through the process.

### Why Do You Need Multiple Git Profiles?

Before diving into the nitty-gritty of setting up multiple Git profiles, let's first understand why you might need them. Here are a few common scenarios:

1. **Multiple Employers:** If you work for more than one company, each company may have its Git repositories, and you need to use a different email address and
   identity for each.

2. **Open-Source Contributions:** When contributing to open-source projects, you might want to use a dedicated email address for those contributions, keeping
   your personal email separate.

3. **Personal vs. Professional Projects:** You might have personal projects and professional projects, and you prefer to keep their Git histories distinct.

### Git Configuration Basics

Git uses a configuration file to store settings and preferences. The primary configuration file is typically found in your home directory and is named
`.gitconfig` (e.g., `~/.gitconfig` on Unix-like systems). You can also have a local configuration file within a Git repository (`.git/config`), which can
override global settings for that specific repository.

Now, let's see how you can set up and manage multiple Git profiles on a single computer.

### Step 1: Check Your Existing Git Configuration

First, you should check your current Git configuration using the following command:

```bash
git config --list
```

This will display all the Git configurations set on your system.

### Step 2: Create a New Configuration Profile

To set up a new Git profile, you'll need to create a new configuration file for each profile. Start by creating a folder for your profiles, such as
`~/.git-profiles/`.

Inside this folder, create individual configuration files for each profile, e.g. `work-config` and `personal-config`. In each file, specify the name and email
associated with that profile:

```bash
<!-- Work Configuration -->
[user]
    name = Your Work Name
    email = work.email@example.com

<!-- Personal Configuration -->
[user]
    name = Your Personal Name
    email = personal.email@example.com
```

### Step 3: Configure Git to Use Different Profiles

To tell Git when to use these different profiles, you can utilize the `includeIf` directive in your main `~/.gitconfig` file:

```bash
[includeIf "gitdir:~/path/to/work-repo/"]
    path = ~/.git-profiles/work-config

[includeIf "gitdir:~/path/to/personal-repo/"]
    path = ~/.git-profiles/personal-config
```

Replace `~/path/to/work-repo/` and `~/path/to/personal-repo/` with the actual paths to your work and personal repositories, respectively. These lines tell Git
to include the specified configuration file when you are working in the respective repositories.

### Step 4: Verify Your Git Profiles

To ensure that Git is using the correct profile, navigate to the respective repository and run:

```bash
git config user.email
```

This will display the email address associated with the current Git configuration.

### Conclusion

By following these steps, you can efficiently manage multiple Git profiles with different email addresses on a single computer. Whether you're working for
multiple companies, contributing to open-source projects, or simply keeping your personal and professional projects separate, having distinct Git profiles will
help you keep your work organized and your Git history accurate.
