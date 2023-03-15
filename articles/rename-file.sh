#!/bin/bash
# List all directories in the current directory
dirs1=(*/)
dirs1=("${dirs1[@]%/}")  # remove trailing slash from directory names

# Create an empty array for filtered directories
filtered=()

# Loop through each directory
for dir in "${dirs1[@]}"; do
  # Check if directory name contains a hyphen
  if [[ "$dir" == *-* ]]; then
    continue
  else
    filtered+=("$dir")
  fi
done

# Rename the directories according to the rules

for dir in "${filtered[@]}"; do
  # Replace all punctuation marks in directory name with blank spaces using tr command (assuming ASCII characters)
  dir_no_punct=$(echo "$dir" | tr '[:punct:]' ' ')

  # Replace all multiple blank spaces in directory name with a single blank space using sed command
  dir_no_spaces=$(echo "$dir_no_punct" | sed 's/ \+/ /g')

  # Replace all blank spaces in directory name with a hyphen using tr command
  new_dir=$(echo "$dir_no_spaces" | tr ' ' '-')

  # Move (rename) the old directory to the new directory using mv command with -v option for verbose output
  mv -v "$dir" "$new_dir"
done

# Exit the script with success status code (0)
exit 0
